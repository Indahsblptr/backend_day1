let todos = [
    {
        id: 1,
        title: "Cuci Tangan",
        isDone: true
    },
    {
        id: 2,
        title: "Jaga jarak",
        isDone: false
    },
    {
        id: 3,
        title: "Gunakan Masker",
        isDone: true
    }
]

// create controller get todos here
exports.getTodos = async (req,res) => {
    try{
        res.send({
            data: todos,
        });
    } catch (error) {
        console.log(error);
        res.send({
            error: {
                message: 'Server Error',
            },
        });
    }
};

// create controller get todo by received id
exports.getTodo = async (req, res) => {
    // proses
    try {
        const id = req.params.id;
        const index = id - 1;
        res.send({
            status: 'success',
            data: {
                todo: todos[index],
            },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'Server Error',
        });
    }
};

// create controller add todo 
exports.addTodo = async (req, res) => {
    try {
        todos = [...todos, req.body];
        res.send({
            status: 'success',
            data: {
                todos,
            },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'Server Error',
        });
    }
};

// create controller update 
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        todos [id - 1] = {...todos[id - 1], ...req.body };
        res.send({
            status: 'success',
            data: {
                todo: todos[id - 1],
            },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'Server Error',
        });
    }
};

// create controller delete todo
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        todos = todos.filter((todo) => todo.id != id);
        res.send({
            status: 'success',
            data: {
                todos,
            },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'Server Error',
        });
    }
};