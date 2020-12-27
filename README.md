# Amazon-clone ecommerce App

This is an Amazon-clone app, which implements the basic functionalities of an ecommerce app. 

Website is [here](https://ecommerce-clone-xiangning.web.app/). It may get slower to fetch the data outside USA.

Let's have a look at the layout of the website!

![image](https://github.com/Xiangning2020/ecommerce-app/blob/main/amazon.png)

Customers need to create their own accounts to sign in to store their information, selet products, purchase and check the order history.


![image](https://github.com/Xiangning2020/ecommerce-app/blob/main/signin1.gif)


If an account alreay exists or the password is not obey certain standards, there will be windows poping up.

![image](https://github.com/Xiangning2020/ecommerce-app/blob/main/signin2.gif)

Also, customers can add/remove the products as they like on the shopping home page/basket page.

![image](https://github.com/Xiangning2020/ecommerce-app/blob/main/basket.gif)

They can even remove the products on the purchase page and pay the order by all major debit and credit cards. And get their order history back.
Once customers logged out, the order will be empty immediately and they can get their order history when they log in again.

![image](https://github.com/Xiangning2020/ecommerce-app/blob/main/orderhistory.gif)


Thanks very much for the instruction of [Clever Programmer](https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ).

## What are the functionalities of this project?

- [x] Realized the Add to basket/Remove from basket/Change the number of products functionalities by using React
Context API to manage the states.
- [x] Implemented authentication by Firebase where customers can sign in to create accounts, log in and out.
- [x] Utilized Stripe.js to realize the payment process accepting all major debit and credit cards from customers in every
country.
- [x] Tracked the orders’ data using Firebase database to list the order history of a specific customer when “Returns &
Orders” button is clicked.

## How to start?

Download all the files except the Firebase related part, since you can deploy it in your own firebase related account!
Also you may have to change the firebase related code in the files。

In the project directory, you can run:

`npm install` and `npm start` to see the effect of the website on your local computer.

