exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blog_post').del()
    .then(function() {
      // Inserts seed entries
      return knex('blog_post').insert([

        {
          id: 1,
          title: 'Chicharrones Banh Mi',
          author: 'N. Helmut Porter',
          body: "Affogato schlitz lo-fi pinterest intelligentsia craft beer meditation coloring book knausgaard waistcoat. Yuccie marfa swag pitchfork. Godard photo booth williamsburg art party chia chambray farm-to-table brooklyn meditation. Small batch cornhole yuccie, lo-fi art party glossier cloud bread quinoa distillery. Gluten-free pug wayfarers iPhone etsy, artisan hella flexitarian jean shorts sriracha irony. Flexitarian normcore pinterest man braid iPhone, pork belly man bun portland. Twee messenger bag four dollar toast paleo hella. Forage lo-fi jianbing tofu readymade af heirloom stumptown tote bag sriracha kogi shabby chic whatever.",
          creation_time: new Date(),
          website_id: 1,
        },
        {
          id: 2,
          title: 'Austin Gluten-Free Shoreditch',
          author: 'Thomas Abian',
          body: "Lumbersexual viral jianbing, af ethical synth green juice hell of cliche. Before they sold out PBR&B echo park, tofu four loko typewriter hoodie subway tile art party. Four dollar toast single-origin coffee narwhal, health goth before they sold out pabst copper mug keytar plaid helvetica dreamcatcher wayfarers shoreditch pickled. Helvetica put a bird on it hashtag slow-carb tilde health goth kinfolk pitchfork cardigan listicle lo-fi pour-over. Lumbersexual fingerstache affogato meggings cornhole paleo scenester. Raclette woke vegan four loko truffaut, cray keffiyeh trust fund hell of +1 occupy. Mumblecore shoreditch freegan, poutine wolf bitters live-edge. Drinking vinegar prism single-origin coffee, enamel pin scenester yr palo santo ethical DIY polaroid. Knausgaard hot chicken snackwave actually. ",
          creation_time: new Date(),
          website_id: 1,
        },
        {
          id: 3,
          title: 'Shabby Chic Poutine',
          author: 'Thomas F. E. Werther',
          body: "Chartreuse mixtape hella kickstarter hell of keytar pitchfork pour-over wolf typewriter squid skateboard. Messenger bag gluten-free bespoke scenester enamel pin fashion axe master cleanse selfies, pabst raclette palo santo lomo. Hell of umami hot chicken palo santo, XOXO tilde bushwick PBR&B vegan vape viral try-hard aesthetic austin. Quinoa freegan kale chips occupy actually iPhone literally VHS small batch green juice sriracha retro lyft cray. Gochujang lumbersexual viral next level letterpress. Deep v 8-bit schlitz vexillologist ramps occupy cred iPhone microdosing plaid selvage celiac twee post-ironic palo santo. Thundercats flannel tumblr pinterest, quinoa four dollar toast polaroid drinking vinegar distillery iPhone cornhole pabst tofu. Polaroid stumptown kogi microdosing. Cold-pressed tattooed hoodie vexillologist quinoa cloud bread.",
          creation_time: new Date(),
          website_id: 1,
        },
      ]);
    });
};
