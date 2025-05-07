// 再帰関数

const charsInBody = (function counter(elm) {
    if (elm.nodeType === 3) {
      // TEXT_NODE
      return elm.nodeValue.length;
    }
    let count = 0;
    for (let i = 0, child; (child = elm.childNodes[i]); i++) {
      count += counter(child);
    }
    return count;
  })(document.body);

  
/*
上のコードはIIFE(即時実行関数式)を使っている
つまり、(document.body)は関数counterに渡す引数ですぐに実行される
結果はcharsInBodyに格納される
*/