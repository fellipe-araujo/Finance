# Modelo de Entidade-Relacionamento (ME-R)

## Entidades

* USER
* FINANCE
* CATEGORY
* ACCOUNT
* OBJECTIVE

## Atributos

* USER (user_id, name, email, password)
* FINANCE (financy_id, expense, price, date, description, category_id, user_id)
* CATEGORY (category_id, name, color)
* ACCOUNT (accouunt_id, name, balance, user_id, objective_id)
* OBJECTIVE (goal_id, name, goal, description, user_id)

## Relacionamentos

ACCOUNT - pertence - USER

- Uma conta pertence a somente um usuário, e um usuário pode ter várias contas.
- **CARDINALIDADE**: n:1

USER - tem - OBJECTIVE

- Um usuário tem nenhum ou vários objetivos, e um objetivo pertence a um usuário.
- **CARDINALIDADE**: 1:n

USER - adquire - FINANCE

- Um usuário adquire nenhuma ou várias finanças, e uma finança é adquirida por um usuário.
- **CARDINALIDADE**: 1:n

FINANCE - contém - CATEGORY

- Uma finança pode conter uma categoria, e uma categoria pode estar contida em várias finanças.
- **CARDINALIDADE**: n:1

OBJECTIVE - possui - ACCOUNT

- Um objetivo possui uma ou várias contas, e uma conta pertence a um objetivo.
- **CARDINALIDADE**: 1:n