# Política de Commits
Os commits devem seguir o seguinte padrão:

* Devem ser escritos em inglês na forma infinitiva.
* Devem possuir uma mensagem explicativa do que foi feito.

    **Exemplo:**
```
"Create Architecture Document."
```

* A issue deve ser citada no commit por questões de rastreabilidade. Para isso, basta adicionar **#< numero_da_issue >**

    **Exemplo:**
    
```
"#7 - Create Architecture Document."
```

**Observação:** por padrão, o caracter "**#**" define uma linha de comentário na mensagem do commit. Para resolver esse problema, digite:

```
$ git config --local core.commentChar '!'
```

* Se mais de uma pessoa trabalhou no mesmo problema durante um pareamento, para que seja inclusa como contribuinte no gráfico de commits do GitHub, basta incluir a expressão **Co-authored-by:** na mensagem do commit.

    **Exemplo:**

```
"#7 - Create Architecture Document.


Co-authored-by: NomeDaPessoa1 <nome1@gmail.com>
Co-authored-by: NomeDaPessoa2 <nome2@gmail.com>"
```