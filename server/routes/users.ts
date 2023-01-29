import { FastifyInstance } from "fastify";

export async function userRoutes(app: FastifyInstance){
    app.post<{Body: {id: string, name: string, image?: string}}>('/signup',async (req, res) => {
        const {id, name, image} = req.body
        if(!id || !name){
            return res.status(400).send()
        }
    })
}
