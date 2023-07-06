import blogModel from '../models/blogModel.js'

exports.createBlog = async (req, res) => {
    try {
        const blog = await blogModel.create(req.body)

        res.send({
            code: 201,
            respnse: blog
        })
    } catch (error) {
        res.send({
            code: 500,
            message: error.message
        })
    }
}
exports.findBlogByAuthor = async (req, res) => {
    try {
        const { userId } = req.query;
        if (userId) {
            const blogs = await blogModel.findAll({ userId }).lean()
            res.send({
                code: 200,
                response: blogs
            })
        } else {
            res.send({
                code: 500,
                message: "please provide required parameters"
            })
        }


    } catch (error) {
        res.send({
            code: 500,
            message: error.message
        })
    }
}