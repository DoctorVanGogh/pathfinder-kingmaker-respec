export default JSON.parse(`{
    "$id": "5349",
    "HitPoints": {
        "$id": "5350",
        "m_BaseStat": "Constitution",
        "m_Stats": {
            "$ref": "5349"
        },
        "m_BaseStatModifier": null,
        "Type": "HitPoints",
        "m_BaseValue": 0,
        "m_Dependents": null,
        "m_DependentFacts": null,
        "PermanentValue": 0,
        "PersistentModifierList": null
    },
    "TemporaryHitPoints": {
        "$id": "5351",
        "Type": "TemporaryHitPoints",
        "m_BaseValue": 0,
        "m_Dependents": null,
        "m_DependentFacts": null,
        "PermanentValue": 0,
        "PersistentModifierList": null
    },
    "AC": {
        "$id": "5352",
        "m_Stats": {
            "$ref": "5349"
        },
        "m_DexBonusLimiters": null,
        "m_DexBonus": {
            "$id": "5353",
            "ModDescriptor": "DexterityBonus",
            "StackMode": "Default",
            "ModValue": 0,
            "Source": null,
            "SourceComponent": null,
            "ItemSource": null
        },
        "Type": "AC",
        "m_BaseValue": 10,
        "m_Dependents": null,
        "m_DependentFacts": null,
        "PermanentValue": 10,
        "PersistentModifierList": [
            {
                "$ref": "5353"
            },
            {
                "$id": "5354",
                "ModDescriptor": "Size",
                "StackMode": "Default",
                "ModValue": 0,
                "Source": null,
                "SourceComponent": null,
                "ItemSource": null
            }
        ]
    },
    "AdditionalAttackBonus": {
        "$id": "5355",
        "Type": "AdditionalAttackBonus",
        "m_BaseValue": 0,
        "m_Dependents": null,
        "m_DependentFacts": null,
        "PermanentValue": 0,
        "PersistentModifierList": [
            {
                "$id": "5356",
                "ModDescriptor": "Size",
                "StackMode": "Default",
                "ModValue": 0,
                "Source": null,
                "SourceComponent": null,
                "ItemSource": null
            }
        ]
    },
    "AdditionalDamage": {
        "$id": "5357",
        "Type": "AdditionalDamage",
        "m_BaseValue": 0,
        "m_Dependents": null,
        "m_DependentFacts": null,
        "PermanentValue": 0,
        "PersistentModifierList": null
    },
    "BaseAttackBonus": {
        "$id": "5358",
        "Type": "BaseAttackBonus",
        "m_BaseValue": 0,
        "m_Dependents": null,
        "m_DependentFacts": null,
        "PermanentValue": 0,
        "PersistentModifierList": null
    },
    "AttackOfOpportunityCount": {
        "$id": "5359",
        "Type": "AttackOfOpportunityCount",
        "m_BaseValue": 1,
        "m_Dependents": null,
        "m_DependentFacts": null,
        "PermanentValue": 1,
        "PersistentModifierList": null
    },
    "Speed": {
        "$id": "5360",
        "Type": "Speed",
        "m_BaseValue": 30,
        "m_Dependents": null,
        "m_DependentFacts": null,
        "PermanentValue": 30,
        "PersistentModifierList": null
    },
    "Charisma": {
        "$id": "5361",
        "m_Disabled": {
            "$id": "5362",
            "m_Count": 0
        },
        "Type": "Charisma",
        "m_BaseValue": 10,
        "m_Dependents": [
            {
                "$id": "5363",
                "$type": "Kingmaker.EntitySystem.Stats.ModifiableValueSkill, Assembly-CSharp",
                "BaseStat": {
                    "$ref": "5361"
                },
                "ClassSkill": {
                    "$id": "5364",
                    "m_Count": 0
                },
                "Type": "SkillPersuasion",
                "m_BaseValue": 0,
                "m_Dependents": [
                    {
                        "$id": "5365",
                        "$type": "Kingmaker.EntitySystem.Stats.ModifiableValueDependant, Assembly-CSharp",
                        "BaseStat": {
                            "$ref": "5363"
                        },
                        "Type": "CheckBluff",
                        "m_BaseValue": 0,
                        "m_Dependents": null,
                        "m_DependentFacts": null,
                        "PermanentValue": 0,
                        "PersistentModifierList": null
                    },
                    {
                        "$id": "5366",
                        "$type": "Kingmaker.EntitySystem.Stats.ModifiableValueDependant, Assembly-CSharp",
                        "BaseStat": {
                            "$ref": "5363"
                        },
                        "Type": "CheckDiplomacy",
                        "m_BaseValue": 0,
                        "m_Dependents": null,
                        "m_DependentFacts": null,
                        "PermanentValue": 0,
                        "PersistentModifierList": null
                    },
                    {
                        "$id": "5367",
                        "$type": "Kingmaker.EntitySystem.Stats.ModifiableValueDependant, Assembly-CSharp",
                        "BaseStat": {
                            "$ref": "5363"
                        },
                        "Type": "CheckIntimidate",
                        "m_BaseValue": 0,
                        "m_Dependents": null,
                        "m_DependentFacts": null,
                        "PermanentValue": 0,
                        "PersistentModifierList": null
                    }
                ],
                "m_DependentFacts": null,
                "PermanentValue": 0,
                "PersistentModifierList": null
            },
            {
                "$id": "5368",
                "$type": "Kingmaker.EntitySystem.Stats.ModifiableValueSkill, Assembly-CSharp",
                "BaseStat": {
                    "$ref": "5361"
                },
                "ClassSkill": {
                    "$id": "5369",
                    "m_Count": 0
                },
                "Type": "SkillUseMagicDevice",
                "m_BaseValue": 0,
                "m_Dependents": null,
                "m_DependentFacts": null,
                "PermanentValue": 0,
                "PersistentModifierList": null
            }
        ],
        "m_DependentFacts": null,
        "PermanentValue": 10,
        "PersistentModifierList": null
    },
    "AdditionalCMB": {
        "$id": "5370",
        "Type": "AdditionalCMB",
        "m_BaseValue": 0,
        "m_Dependents": null,
        "m_DependentFacts": null,
        "PermanentValue": 0,
        "PersistentModifierList": null
    },
    "AdditionalCMD": {
        "$id": "5371",
        "Type": "AdditionalCMD",
        "m_BaseValue": 0,
        "m_Dependents": null,
        "m_DependentFacts": null,
        "PermanentValue": 0,
        "PersistentModifierList": null
    },
    "Constitution": {
        "$id": "5372",
        "m_Disabled": {
            "$id": "5373",
            "m_Count": 0
        },
        "Type": "Constitution",
        "m_BaseValue": 10,
        "m_Dependents": [
            {
                "$ref": "5350"
            },
            {
                "$id": "5374",
                "$type": "Kingmaker.EntitySystem.Stats.ModifiableValueSavingThrow, Assembly-CSharp",
                "BaseStat": {
                    "$ref": "5372"
                },
                "Type": "SaveFortitude",
                "m_BaseValue": 0,
                "m_Dependents": null,
                "m_DependentFacts": null,
                "PermanentValue": 0,
                "PersistentModifierList": null
            }
        ],
        "m_DependentFacts": null,
        "PermanentValue": 10,
        "PersistentModifierList": null
    },
    "Dexterity": {
        "$id": "5375",
        "m_Disabled": {
            "$id": "5376",
            "m_Count": 0
        },
        "Type": "Dexterity",
        "m_BaseValue": 10,
        "m_Dependents": [
            {
                "$ref": "5352"
            },
            {
                "$id": "5377",
                "$type": "Kingmaker.EntitySystem.Stats.ModifiableValueSavingThrow, Assembly-CSharp",
                "BaseStat": {
                    "$ref": "5375"
                },
                "Type": "SaveReflex",
                "m_BaseValue": 0,
                "m_Dependents": null,
                "m_DependentFacts": null,
                "PermanentValue": 0,
                "PersistentModifierList": null
            },
            {
                "$id": "5378",
                "$type": "Kingmaker.EntitySystem.Stats.ModifiableValueSkill, Assembly-CSharp",
                "BaseStat": {
                    "$ref": "5375"
                },
                "ClassSkill": {
                    "$id": "5379",
                    "m_Count": 0
                },
                "Type": "SkillMobility",
                "m_BaseValue": 0,
                "m_Dependents": null,
                "m_DependentFacts": null,
                "PermanentValue": 0,
                "PersistentModifierList": null
            },
            {
                "$id": "5380",
                "$type": "Kingmaker.EntitySystem.Stats.ModifiableValueSkill, Assembly-CSharp",
                "BaseStat": {
                    "$ref": "5375"
                },
                "ClassSkill": {
                    "$id": "5381",
                    "m_Count": 0
                },
                "Type": "SkillThievery",
                "m_BaseValue": 0,
                "m_Dependents": null,
                "m_DependentFacts": null,
                "PermanentValue": 0,
                "PersistentModifierList": null
            },
            {
                "$id": "5382",
                "$type": "Kingmaker.EntitySystem.Stats.ModifiableValueSkill, Assembly-CSharp",
                "BaseStat": {
                    "$ref": "5375"
                },
                "ClassSkill": {
                    "$id": "5383",
                    "m_Count": 0
                },
                "Type": "SkillStealth",
                "m_BaseValue": 0,
                "m_Dependents": null,
                "m_DependentFacts": null,
                "PermanentValue": 0,
                "PersistentModifierList": [
                    {
                        "$id": "5384",
                        "ModDescriptor": "Size",
                        "StackMode": "Default",
                        "ModValue": 0,
                        "Source": null,
                        "SourceComponent": null,
                        "ItemSource": null
                    }
                ]
            },
            {
                "$id": "5385",
                "$type": "Kingmaker.EntitySystem.Stats.ModifiableValueInitiative, Assembly-CSharp",
                "m_Dexterity": {
                    "$ref": "5375"
                },
                "m_DexBonus": {
                    "$id": "5386",
                    "ModDescriptor": "DexterityBonus",
                    "StackMode": "Default",
                    "ModValue": 0,
                    "Source": null,
                    "SourceComponent": null,
                    "ItemSource": null
                },
                "Type": "Initiative",
                "m_BaseValue": 0,
                "m_Dependents": null,
                "m_DependentFacts": null,
                "PermanentValue": 0,
                "PersistentModifierList": [
                    {
                        "$ref": "5386"
                    }
                ]
            }
        ],
        "m_DependentFacts": null,
        "PermanentValue": 10,
        "PersistentModifierList": null
    },
    "Intelligence": {
        "$id": "5387",
        "m_Disabled": {
            "$id": "5388",
            "m_Count": 0
        },
        "Type": "Intelligence",
        "m_BaseValue": 10,
        "m_Dependents": [
            {
                "$id": "5389",
                "$type": "Kingmaker.EntitySystem.Stats.ModifiableValueSkill, Assembly-CSharp",
                "BaseStat": {
                    "$ref": "5387"
                },
                "ClassSkill": {
                    "$id": "5390",
                    "m_Count": 0
                },
                "Type": "SkillKnowledgeArcana",
                "m_BaseValue": 0,
                "m_Dependents": null,
                "m_DependentFacts": null,
                "PermanentValue": 0,
                "PersistentModifierList": null
            },
            {
                "$id": "5391",
                "$type": "Kingmaker.EntitySystem.Stats.ModifiableValueSkill, Assembly-CSharp",
                "BaseStat": {
                    "$ref": "5387"
                },
                "ClassSkill": {
                    "$id": "5392",
                    "m_Count": 0
                },
                "Type": "SkillKnowledgeWorld",
                "m_BaseValue": 0,
                "m_Dependents": null,
                "m_DependentFacts": null,
                "PermanentValue": 0,
                "PersistentModifierList": null
            }
        ],
        "m_DependentFacts": null,
        "PermanentValue": 10,
        "PersistentModifierList": null
    },
    "Owner": {
        "$ref": "5"
    },
    "SaveFortitude": {
        "$ref": "5374"
    },
    "SaveReflex": {
        "$ref": "5377"
    },
    "SaveWill": {
        "$id": "5393",
        "BaseStat": {
            "$id": "5394",
            "m_Disabled": {
                "$id": "5395",
                "m_Count": 0
            },
            "Type": "Wisdom",
            "m_BaseValue": 10,
            "m_Dependents": [
                {
                    "$ref": "5393"
                },
                {
                    "$id": "5396",
                    "$type": "Kingmaker.EntitySystem.Stats.ModifiableValueSkill, Assembly-CSharp",
                    "BaseStat": {
                        "$ref": "5394"
                    },
                    "ClassSkill": {
                        "$id": "5397",
                        "m_Count": 0
                    },
                    "Type": "SkillPerception",
                    "m_BaseValue": 0,
                    "m_Dependents": null,
                    "m_DependentFacts": null,
                    "PermanentValue": 0,
                    "PersistentModifierList": null
                },
                {
                    "$id": "5398",
                    "$type": "Kingmaker.EntitySystem.Stats.ModifiableValueSkill, Assembly-CSharp",
                    "BaseStat": {
                        "$ref": "5394"
                    },
                    "ClassSkill": {
                        "$id": "5399",
                        "m_Count": 0
                    },
                    "Type": "SkillLoreNature",
                    "m_BaseValue": 0,
                    "m_Dependents": null,
                    "m_DependentFacts": null,
                    "PermanentValue": 0,
                    "PersistentModifierList": null
                },
                {
                    "$id": "5400",
                    "$type": "Kingmaker.EntitySystem.Stats.ModifiableValueSkill, Assembly-CSharp",
                    "BaseStat": {
                        "$ref": "5394"
                    },
                    "ClassSkill": {
                        "$id": "5401",
                        "m_Count": 0
                    },
                    "Type": "SkillLoreReligion",
                    "m_BaseValue": 0,
                    "m_Dependents": null,
                    "m_DependentFacts": null,
                    "PermanentValue": 0,
                    "PersistentModifierList": null
                }
            ],
            "m_DependentFacts": null,
            "PermanentValue": 10,
            "PersistentModifierList": null
        },
        "Type": "SaveWill",
        "m_BaseValue": 0,
        "m_Dependents": null,
        "m_DependentFacts": null,
        "PermanentValue": 0,
        "PersistentModifierList": null
    },
    "SkillMobility": {
        "$ref": "5378"
    },
    "SkillAthletics": {
        "$id": "5402",
        "BaseStat": {
            "$id": "5403",
            "m_Disabled": {
                "$id": "5404",
                "m_Count": 0
            },
            "Type": "Strength",
            "m_BaseValue": 10,
            "m_Dependents": [
                {
                    "$ref": "5402"
                }
            ],
            "m_DependentFacts": null,
            "PermanentValue": 10,
            "PersistentModifierList": null
        },
        "ClassSkill": {
            "$id": "5405",
            "m_Count": 0
        },
        "Type": "SkillAthletics",
        "m_BaseValue": 0,
        "m_Dependents": null,
        "m_DependentFacts": null,
        "PermanentValue": 0,
        "PersistentModifierList": null
    },
    "SkillKnowledgeArcana": {
        "$ref": "5389"
    },
    "SkillLoreNature": {
        "$ref": "5398"
    },
    "SkillPerception": {
        "$ref": "5396"
    },
    "SkillThievery": {
        "$ref": "5380"
    },
    "Strength": {
        "$ref": "5403"
    },
    "Wisdom": {
        "$ref": "5394"
    },
    "Initiative": {
        "$ref": "5385"
    },
    "SkillPersuasion": {
        "$ref": "5363"
    },
    "SkillStealth": {
        "$ref": "5382"
    },
    "SkillUseMagicDevice": {
        "$ref": "5368"
    },
    "SkillLoreReligion": {
        "$ref": "5400"
    },
    "SkillKnowledgeWorld": {
        "$ref": "5391"
    },
    "CheckBluff": {
        "$ref": "5365"
    },
    "CheckDiplomacy": {
        "$ref": "5366"
    },
    "CheckIntimidate": {
        "$ref": "5367"
    },
    "SneakAttack": {
        "$id": "5406",
        "Type": "SneakAttack",
        "m_BaseValue": 0,
        "m_Dependents": null,
        "m_DependentFacts": null,
        "PermanentValue": 0,
        "PersistentModifierList": null
    },
    "Reach": {
        "$id": "5407",
        "Type": "Reach",
        "m_BaseValue": 0,
        "m_Dependents": null,
        "m_DependentFacts": null,
        "PermanentValue": 0,
        "PersistentModifierList": [
            {
                "$id": "5408",
                "ModDescriptor": "Size",
                "StackMode": "Default",
                "ModValue": 5,
                "Source": null,
                "SourceComponent": null,
                "ItemSource": null
            }
        ]
    }
}`);
