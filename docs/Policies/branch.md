# Política de Branches
Antes de criar, certificar-se em qual _branch_ você está atualmente, dar o comando ```$ git pull origin BranchAtual``` para atualizar os arquivos e, em seguida, criar a sua _branch_.

As branches devem seguir o seguinte padrão:

* A _branch_ deverá possuir o padrão CamelCase **x-NomeDaBranch**, em que o "**x**" é o número da issue. 
  
    **Exemplo:**
```
1-CriarDocumentoDeArquitetura
```

* Caso a _branch_ não esteja associada a nenhuma issue, não é necessária a adição de nenhuma tag.
  
    **Exemplo:**
```
RefatorarMER