
const cron = require('node-cron');
const chalk = require('chalk');
const models = require('../models');
const Sequelize = require('sequelize');

module.exports = (app) => {
    // 
    let task = cron.schedule('* * * * *', async () => {
        try {

            console.log(chalk.green('Running a task every minute'));

            let techs = await models.User.findOne({
                order: Sequelize.literal('random()'),
                where: {
                    type: 'tech',
                }
            });

            await models.Ticket.update({ assigned_to: techs.id, status: 'in-progress' },
                {
                    limit: 5, 
                    order: Sequelize.literal('random()'),
                    where: {
                        status: 'open',
                        assigned_to: null,
                    }
                }
            );

        } catch (error) {
            console.error(chalk.red(error));
        }
    }, {
        scheduled: true,
    });
    task.start();
};