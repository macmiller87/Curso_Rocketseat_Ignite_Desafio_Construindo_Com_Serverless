import { APIGatewayEvent } from "aws-lambda";
import { v4 as uuidV4 } from "uuid";
import { document } from "../utils/dynamodbClient";

interface ICreateTodo {
    title: string;
    deadline: string;
}

export const handle = async (event: APIGatewayEvent)   => {

    const { title, deadline } = JSON.parse(event.body) as ICreateTodo;
    const { user_id } = event.pathParameters;

    const response = await document.query({
        TableName: "usersTodo",
        KeyConditionExpression: "user_id = :id",
        ExpressionAttributeValues: {
            ":id": user_id
        }
    }).promise();

    const todoAlreadyExists = response.Items[0];

    if(!todoAlreadyExists) {

        const todo = {
            id: uuidV4(),
            user_id,
            title,
            done: false,
            deadline: new Date(deadline)
        }

        await document.put({
            TableName: "usersTodo",
            Item: todo
        }).promise();

        
        return {
            statusCode: 201,
            body: JSON.stringify({
                message: "Todo created whit succes!",
                todo: todo
            })
        };

    } else {

        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Users todo already exists!"
            })
        };
    }
}