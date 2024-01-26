function solution(new_id) {
  new_id = new_id.toLowerCase().replace(/[^a-z0-9\-_.]/g, "").replace(/\.+/g, ".").replace(/^\.|\.$/g, "");
  if (new_id === "") {
    new_id = "a";
  }
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
       new_id = new_id.replace(/^\.|\.$/g, "");
  }

  if (new_id.length <= 2) {
    const c = new_id.slice(-1);
    while (new_id.length < 3) {
      new_id += c;
    }
  }
  return new_id;
}