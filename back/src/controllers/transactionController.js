import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import db from '../db.js';

export async function createUser(req, res) {
  const user = req.body;

  try {
    const passwordHash = bcrypt.hashSync(user.password, 10);

    await db.collection("users").insertOne({ ...user, password: passwordHash, transactions: [] });

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function createTransaction(req, res) {
  const transaction = req.body;
  const { user } = res.locals;

  try {
    const amountInCents = transaction.amount * 100;
    const newTransaction = {
      ...transaction,
      id: uuid(),
      amount: amountInCents,
      createdAt: dayjs().format("DD/MM")
    };

    await db.collection("users").updateOne(
      { _id: user._id },
      {
        $push: { transactions: newTransaction }
      }
    );

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function getUser(req, res) {
  const { user } = res.locals;

  try {
    let totalSum = 0;
    user.transactions.forEach(transaction => {
      if (transaction.type === 'deposit') {
        totalSum += transaction.amount;
      } else {
        totalSum -= transaction.amount;
      }
    })

    const formattedUser = { ...user, totalSum };
    delete formattedUser.password;

    res.send(formattedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}