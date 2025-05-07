// try-catchでエラーを処理する方法

try {
    buildMySite("./website");
    // 関数を実行してエラーが発生したらエラーPBうジェクトがeに格納される
  } catch (e) {
    // eがRangeError(範囲外エラー)ならば再試行する
    if (e instanceof RangeError) {
      console.error("引数が範囲を超えているようです:", e);
      console.log("再試行中...");
      buildMySite("./website");
    } else {
    //   それ以外のエラーならば自分で対処できないのでthrowする
    // このコードの外側にtry-catchがある場合は、外側のcatchに処理が移る
    // このコードの外側にtry-catchがない場合は、エラーが発生した場所で処理が終了する
      throw e;
    }
  }
  