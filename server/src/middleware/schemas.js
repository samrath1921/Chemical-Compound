const joi=require('joi');

const getSchema=joi.object({
    offset:joi.number().required(),
    limit:joi.number().required()
})

const inputSchema=joi.object({
    id:joi.number(),
    name:joi.string().required(),
    image:joi.string().required(),
    description:joi.string().required()
})

module.exports={inputSchema,getSchema};