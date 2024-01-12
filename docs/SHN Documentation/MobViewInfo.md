| MobViewInfo  |              |                                                                                                                                           |
| ------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SHINE_MOB_ID | ID           | A unique value given to each monster.                                                                                                    |
| STR[32]      | InxName      | Monster unique index in English. No spaces.                                                                                                |
| STR[32]      | FileName     | Reschar folder.                                                                                                                          |
| STR[32]      | Texture      | Replace default .DDS texture.                                                                                                           |
| INX[Q5]      | AttackType   | MAT_MELEE, MAT_RANGE                                                                                                                     |
| STR[32]      | ShotEffect   | If AttackType is MAT_RANGE, there must be a shoot effect.                                                                                |
| STR[32]      | MobPortrait  | The image file name displayed in the target window                                                                                       |
| DWORD        | ChrMarkSize  | The size of the circle image visible below the targeted object.                                                                         |
| INX[R5]      | MiniMapIcon  | Icon index displayed on the minimap.                                                                                                     |
| WORD         | NpcViewIndex | Reference index of what appearance the character type mob will have (NPCViewInfo)                                                        |
| WORD         | BoundingBox  | In the case of a specific mob, it is necessary to collide so that the inside cannot be seen when the camera is turned close (doors inside a dungeon, etc.), in which case a value of 1 is used. |
| WORD         | EffectViewID | Match the EffectViewInfo that specifies the collision effect value of the monster                                                        |
| BYTE         | SpectralGlow | If AttackType is MAT_RANGE, there must be a shoot effect.                                                                                |
| STR[32]      | Group1       | The lowest group name text used in the quest                                                                                             |
| STR[32]      | Group2       | Lieutenant group name text used in quests                                                                                                |
| STR[32]      | Group3       | Top-level group name text used in the quest                                                                                              |
| STR[32]      | GroupS       | Adjective mob group name text used in the quest                                                                                          |