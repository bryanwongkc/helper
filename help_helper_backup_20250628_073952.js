import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toggle } from "@/components/ui/toggle";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const recipes = [
  {
    id: 1,
    title: "Pan-fryed Minced Pork with Shiitake Mushroom and Water Chestnut",
    ingredients: [
      "Minced pork 180g",
      "Shiitake mushroom 20g",
      "Water chestnut 40g",
      "Lee Kum Kee Premium Oyster Sauce 1 1/2 Tbsp"
    ],
    steps: [
      "Mix all the ingredients with marinade for 10 mins. Shape into patties.",
      "Pan-fry the pork patties in 1 Tbsp oil. Press gently. Fry over low heat until golden yellow and done.",
      "Tips: Without adding starch of any kind, pork patties taste much more refreshing. Just use Lee Kum Kee Premium Oyster Sauce to marinate the pork."
    ]
  },
  {
    id: 2,
    title: "Drunken Chicken Roll",
    ingredients: [
      "Boneless chicken thighs 2 pcs",
      "Red Date 2 pcs, soaked and diced",
      "Goji Berry 10g, soaked",
      "Lee Kum Kee Drunken Chicken Marinade 1 bottle"
    ],
    steps: [
      "Use a meat tenderizer to pound the chicken thigh until the size is doubled and the shape flat. Put the chicken, red date and goji berry onto a piece of aluminium foil. Roll and tighten the chicken.",
      "Steam the chicken roll in medium heat for 40 minutes. Remove the aluminium foil after cooling. Soak the chicken into the marinade. Put it in the fridge for 2 hours. Slice and enjoy.",
      "Tips: Twist the two ends of the chicken roll to create a cylinder.",
      "Use the back of the knife if you do not have a meat tenderizer."
    ]
  },
  {
    id: 3,
    title: "Stir-fried Satay Chicken and Udon",
    ingredients: [
      "Lee Kum Kee Satay Thick Soup 1 pack",
      "Japanese Inaniwa/Udon 100g",
      "Chicken 80g (cut into small pieces)",
      "Green pepper 20g (sliced)",
      "Green onion 10g",
      "Chili 1 pc",
      "Lee Kum Kee Premium Oyster Sauce 1 Tbsp"
    ],
    steps: [
      "Marinate the chicken with oyster sauce for 10 minutes. De-seed the chili and slice it.",
      "Boil and cook the udon. Drain well.",
      "Pan fry the chicken until golden. Add satay soup and udon. Fry and mix well.",
      "Cook until soup is thickened. Add in green pepper and green onion. Mix well and top with chili slices.",
      "Tips: Add the soup bit by bit so that the udon can better absorb the flavour."
    ]
  }
];

const tasks = [...]; // OMITTED FOR BREVITY

export default function HelpHelperApp() {
  // app code...
}
