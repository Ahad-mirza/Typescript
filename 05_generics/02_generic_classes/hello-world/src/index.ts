class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
  }
  
  const pair1 = new KeyValuePair<number, string>(1, "One");
  console.log(pair1.key);
  console.log(pair1.value); 
  
  const pair2 = new KeyValuePair<string, boolean>("isValid", true);
  console.log(pair2.key);
  console.log(pair2.value);