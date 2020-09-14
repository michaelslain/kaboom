let names = `Kahoot me
    Pill Cosby 💊
    Claustrophobic Teletubby
    Mr.stark I don’t feel so good
    HortonHearsAJew
    Kahoot the Teacher
    Honey wheres my super kah00t
    Nerdy-Poo
    KahToot
    Loud Mouth
    Inky
    Chunkie
    Confused Teletuby
    KaShootMe
    Sub2PewDiePie
    Kim Jong Uno
    Comedy Central
    Homer
    Couch Potato
    Kashoot me
    Kim Jong OOF
    Moe Lester
    Third Wheeler
    Nugget
    Kashoot da teacher
    Chungus the fungus
    Kermit Kermicide
    Lil Diabetus
    Big Chungus
    Walking Dictionary
    Summer Teeth
    Gucci Flippidy Flops
    Johnny Johnny 👶
    Weird Beard
    Kermit
    Deja View
    Fire Guy
    Fuzzy Pack
    Butternut
    Organic Punk
    Chris P Chicken
    Ligma
    Kool Kids Klub
    Married Man
    Metal Star
    Ctrl W = Win
    Peter file
    TRIGGERED
    Nerf Bastion
    Billy Hills
    Night Magnet
    Dancing Madman
    Egghead
    Babysaurus
    Enigma
    Eye Candy
    Cheeky Monkey
    Butter Scotch
    Junior Jumper
    Floating Heart
    Loading…
    Pink Nightmare
    Wildcat Talent
    Koi Diva
    TeKilla Sunrise
    Gabe itch
    Loaf of Beans
    Dixie Normous
    Cheese Ball
    Candy Cough
    Panda Heart
    Cranberry Sprite
    Crayon Munchers
    Magic Peach
    Tiger Kitty
    Flower Child
    Freckles
    Tragic Girl
    Girls of Neptune
    Candycane Missy
    Cutie Bun
    Huggable Bab
    Missie Lucky
    Broken Paws
    Anonymous Girl
    Tiny Hunter
    Super Giggles
    Lady Fantastic
    Mafia Princess
    Eye Candy Kitten
    Troubled Chick
    Feral Filly
    Sassy Muffin
    Canary Apple Red
    Woodland Beauty
    Miss Fix It
    Miss Meow
    Emerald Goddess
    Marshmallow Treat
    Leading Light
    Queen Bee
    Microwave Chardonnay
    Gentle Woman
    Cute Pumpkin
    Titanium Ladybug
    Freeze Queen
    Young Lady
    Winner Woman
    Wonk Sidewalk
    EnforcerTeen
    Me Miss
    Undergrad Split
    Triple Adorable
    Her Majesty
    Cinderella
    The Beekeeper
    Cool Whip
    Digital Goddess
    Peanut Butter Woman
    Fresh Lovely
    Fisher Teen
    Lady Turnip
    Luna Star
    Princess Fuzzie
    Rainbow Sweety`

names = names.split('\n')
names = names.map(name => name.trim())

class Name {
    constructor() {
        const randomNumber = Math.floor(Math.random() * names.length)
        this.value = names[randomNumber]
    }
}

export default Name
