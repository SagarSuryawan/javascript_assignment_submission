question :   Explain what is execution context in detail with diagram


ans = 1)Execution contex is enviorment in which our code is execucated and evaluated.
      2)We have a default execution contex which is Global Execution Contex.
      3)Javascripts Engine creats the global Execution contex.before it starts to execute any code.
      4)In code variable and function that is not inside any function ,they are present in global execution contex.
      5)when function get call ,function create new execution context 


      diagram

+----------------------------------+
|        Execution Context         |
|----------------------------------|
|       Variable Environment       |
|----------------------------------|
|       Lexical Environment        |
|----------------------------------|
|             Scope Chain           |
|----------------------------------|
|           This Binding           |
+----------------------------------+
