exports.getIndex = (req, res, next) => {



    const tickets = [
        { assigned_to: "John Doe", created_by: "Jane Smith", description: "Ticket description 1", title: "Ticket 1", createdAt: "2022-01-01" },
        { assigned_to: "Mike Johnson", created_by: "Alice Brown", description: "Ticket description 2", title: "Ticket 2", createdAt: "2022-02-02" },
      ];

    res.render('index', {
        title: 'Swift Ticket',
        name: req.user.email,
        tickets: tickets,
    });
}

exports.unauthorized = (req, res, next) => {
    res.render('unauthorized');
}

exports.internalServerError = (req, res, next) => {
    res.render('server_error');
}