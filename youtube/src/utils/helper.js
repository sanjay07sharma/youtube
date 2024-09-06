// Array of sample names
var nameList = [
    'Shadow', 'Blaze', 'Mystic', 'Starlight', 'Frost', 'Ember', 'Nebula', 'Storm',
    'Lunar', 'Phoenix', 'Raven', 'Zephyr', 'Titan', 'Echo', 'Tempest', 'Blizzard',
    'Quasar', 'Vortex', 'Mirage', 'Nova', 'Specter', 'Drift', 'Rift', 'Harbinger',
    'Sable', 'Onyx', 'Solstice', 'Inferno', 'Glacier', 'Aura', 'Cascade', 'Pulse',
    'Zenith', 'Horizon', 'Cinder', 'Nimbus', 'Flare', 'Seraph', 'Wraith', 'Cryptic',
    'Rogue', 'Spectral', 'Gale', 'Talon', 'Viper', 'Abyss', 'Fang', 'Reaper',
    'Bane', 'Emissary', 'Oracle', 'Aether', 'Shiver', 'Blitz', 'Havoc', 'Strider',
    'Ardent', 'Fury', 'Quake', 'Spectra', 'Hex', 'Riftwalker', 'Pyre', 'Zen',
    'Shadowstep', 'Astral', 'Pyro', 'Crimson', 'Enigma', 'Shade', 'Valkyrie', 
    'Saber', 'Rift', 'Phantom', 'Thorn', 'Obsidian', 'Venom', 'Pulsefire',
    'Nox', 'Void', 'Plasma', 'Cloak', 'Blade', 'Raider', 'Corsair', 'Stratos',
    'Tempest', 'Jade', 'Echo', 'Oracle', 'Warden', 'Scarlet', 'Gloom', 'Blight',
    'Shard', 'Mirage', 'Aegis', 'Skylark', 'Dusk', 'Eclipse', 'Grim', 'Silhouette',
    'Aegis', 'Chimera', 'Glimmer', 'Lynx', 'Berserker', 'Riftblade', 'Thunder',
    'Frostbite', 'Sabre', 'Nightfall', 'Surge', 'Bolt', 'Aurora', 'Rogue',
    'Sentinel', 'Nyx', 'Catalyst', 'Emberwing', 'Sable', 'Nemesis', 'Titanium'
];

// Array of sample messages
var messages = [
    'Conquer your fears!', 'The adventure begins!', 'Rise to the challenge!',
    'The sky is the limit!', 'Unleash your potential!', 'Embrace the journey!',
    'Forge your destiny!', 'The future is yours!', 'Embrace the unknown!',
    'Seek the truth!', 'Defy the odds!', 'Unlock your power!', 'Face your fears!',
    'Rewrite the rules!', 'Never back down!', 'Stand your ground!',
    'Believe in yourself!', 'Create your legacy!', 'Embrace the chaos!',
    'Let your spirit soar!', 'Never stop dreaming!', 'Break the chains!',
    'Harness your strength!', 'The choice is yours!', 'The world awaits!',
    'Face the storm!', 'Ignite the spark!', 'Dare to be different!',
    'Follow the light!', 'Shape your destiny!', 'The journey continues!',
    'Defy gravity!', 'Seize the day!', 'Make your mark!', 'The time is now!',
    'Unveil the mystery!', 'Rise above!', 'Feel the power!', 'Defend your honor!',
    'Live your truth!', 'Explore the unknown!', 'Endure and survive!',
    'Never surrender!', 'Find your path!', 'Charge ahead!', 'Keep the faith!',
    'The legend lives on!', 'Stand tall!', 'Lead the way!', 'Forge ahead!',
    'Embrace the struggle!', 'Strength in unity!', 'Endless possibilities!',
    'Strive for greatness!', 'Break the silence!', 'No limits, no boundaries!',
    'Shatter the illusion!', 'Embrace your shadow!', 'Chase your dreams!',
    'Reveal your true self!', 'Stand firm!', 'Challenge accepted!', 'Defend the realm!',
    'Answer the call!', 'Roam the wild!', 'Let the adventure begin!',
    'Discover your purpose!', 'Shine bright!', 'Master your craft!',
    'Hold the line!', 'Seek the horizon!', 'Harness the elements!',
    'The quest awaits!', 'Reclaim your power!', 'Defend your title!',
    'Rise, rebel, repeat!', 'Claim your throne!', 'The path is clear!',
    'Step into the light!', 'Face the darkness!', 'Lead with honor!',
    'Fear no evil!', 'Join the battle!', 'The legend begins!'
];

// Function to generate a random name and message
export function generateRandomName() {
    return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}
