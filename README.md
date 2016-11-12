# SmartBar Database structure
-----------------------------
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
