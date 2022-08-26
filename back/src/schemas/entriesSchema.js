import joi from "joi";

const entriesSchema = joi.object({
    value:joi.number().required(),
    description: joi.string().required(),
    type: joi.string().required()
});

export default entriesSchema;