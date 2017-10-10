
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {
        author_name: 'Jean-Paul Sartre',
        body: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
        creation_time: new Date(),
        blog_id: 1,
        },
        {
        author_name: 'Rene Descartes',
        body: "The senses deceive from time to time, and it is prudent never to trust wholly those who have deceived us even once.",
        creation_time: new Date(),
        blog_id: 2,
        },
        {
        author_name: 'Friedrich Nietzsche',
        body: "He who fights with monsters might take care lest he thereby become a monster. And if you gaze for long into an abyss, the abyss gazes also into you.",
        creation_time: new Date(),
        blog_id: 2,
        },
        {
        author_name: 'Ayn Rand',
        body: "Contradictions do not exist. Whenever you think you are facing a contradiction, check your premises. You will find that one of them is wrong.",
        creation_time: new Date(),
        blog_id: 3,
        },
      ]);
    });
};
