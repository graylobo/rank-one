const rankList = {
  0: { HERMES: { link: "" } },
  1: { CHANEL: { link: "", name: "샤넬" }, louis: { link: "", name: "루이비통" } },
};
// console.log(Object.entries(rankList));
Object.entries(rankList).map((e) => {
  Object.entries(e[0]).map((e) => {
    console.log(e[0])
  });
});
