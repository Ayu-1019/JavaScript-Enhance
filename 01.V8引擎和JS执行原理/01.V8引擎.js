
/*
  V8引擎 浏览器内核 
  C ++编写的Google开源高性能JavaScript和WebAssembly引擎，它用于Chrome和Node.js等
  V8可以独立运行，也可以嵌入到任何C ++应用程序中

  原理：
  JavaScript源代码 -> Parse(词法分析和语法分析) -> AST抽象语法树 -> Ignition 将抽象语法树转换成字节码bytecode) -> 运行结果
                       解析器                                      在Ignition下会进行信息收集 
                                                                  TurboFan 重复的代码会标记为hot -> 优化的机器码 -> 运行结果
*/