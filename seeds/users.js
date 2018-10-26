exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(() => knex("properties").del())
    .then(() =>
      knex("users").insert([
        { id: 1, username: "Nik", password: "Meme1" },
        { id: 2, username: "John", password: "Meme2" },
        { id: 3, username: "Steven", password: "Meme3" }
      ])
    )
    .then(() =>
      knex("properties").insert([
        {
          pid: "6716480754",
          location: "(South Central)",
          title: "Massive Closets ~ Hardwoods ~ Close To St. Ed's University!",
          price: '$1070"',
          url:
            "https://austin.craigslist.org/apa/d/massive-closets-hardwoods/6716480754.html",
          date: "2018-10-24 11:04",
          user_id: "2"
        },
        {
          pid: "6726748723",
          location: "(3011 Whitis Ave)",
          title: "Parks and Recreation, Walkabilty 100%",
          price: "$1150",
          url:
            "https://austin.craigslist.org/apa/d/parks-and-recreation/6726748723.html",
          date: "2018-10-24 11:04",
          user_id: "1"
        }
      ])
    );
};
