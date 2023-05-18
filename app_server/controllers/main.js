const index = (req, res) => {
    res.render('index', { title: 'Travlr vacations' });
};

module.exports = {
    index
};