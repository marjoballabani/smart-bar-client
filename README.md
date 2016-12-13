# Smart Bar (client)

> SmartBar is an app to manage restaurant billing process and sale analytics.
it is still on it's early stage and need more to go to BETA version.
For a better user experience Angular Material is implemented

> Using **angular 1.0** for client side **Node.JS** and **express** for server side
and **MongoDB** as database this is a **MEAN-stack** project.

# SmartBar Database structure(MongoDB)

1. user
    - **#** ID
    - name
    - surname
    - username
    - password
    - **$** role_id

2. table
    - **#** ID
    - name
    - position
    - status

2. role
    - **#** ID
    - name

3. category
    - **#** ID
    - name
    - description

4. products
    - **#** ID
    - name
    - price
    - **$** category_id

5. bill
    - **#** ID
    - date
    - total
    - status
    - **$** table_id
    - **$** user_id

6. bill_product
    - **#** ID
    - count
    - **$** product_id
