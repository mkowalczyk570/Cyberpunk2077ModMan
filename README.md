#2077 Mod Man

#Motivation
Modding Cyberpunk 2077 can be a rather cumbersome task when users don't have premium mod manager options available to them. When modding the game, players such as myself love to use hundreds of mods, and keeping track of them becomes quite a hassle due to game updates breaking older mod versions. This application aims to solve that problem by providing a comprehensive rundown of what mod versions the user has previously downloaded, and what current version is available.

Another problem is moving the sheer quantity of files to their respective locations. There are many mods, some alter gameplay, others alter textures, and some even uproot and rework entire game systems such as skills and driving mechanics. And all of these mods have to be sorted accordingly..
The 2077 Mod Man will aim to automatically sort these files into their destination directories in the game files

#About

The mod manager will be comprised of several moving parts. The first is a backend data retrieval structure built using the NexusMods API, and storage of relevant mod information in mongoDB documents for the purpose of version comparison and keeping a users download history organized. Mod information will also be cached using a redis server, reducing API calls for bulk downloads. The user will also have the option to create different mod lists, and load them at will.

NexusMods API allows for retrieval of not only mod and game information, but download links. The backend will consolidate a list of download links for all necessary files, which the user can then either download specific mods manually, or a batch download.

Once downloaded, a Python script will handle sorting all of the files into their required directories. Most mods provide a filepath informing the user where the mod is supposed to go, so the python script will read this filepath and copy the files into the game directory. The user can set the origin location of mod downloads and the game directory in a config file. Some mods do NOT provide this filepath, so the program will then read the file extension to determine where the mod goes. 

The mod manager will also have a frontend server built using React, where they can view mod information, download mods, and manage mod lists. 

This is a huge passion project of mine, and I aim to complete basic functionality for a 2024 beta release, and a V1 release in 2025.


