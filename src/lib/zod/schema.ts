import { z } from "zod";

export const pokemonListSchema = z.object({
  results: z.array(
    z.object({
      name: z.string(),
      url: z.string().url(),
    })
  ),
});

export const pokemonIdSchema = z.object({
  stats: z.array(
    z.object({
      base_stat: z.number(),
      stat: z.object({ name: z.string() }),
    })
  ),
  types: z.array(
    z.object({
      slot: z.number(),
      type: z.object({ name: z.string(), url: z.string() }),
    })
  ),
  sprites: z.object({
    other: z.object({
      dream_world: z.object({
        front_default: z.string(),
      }),
    }),
  }),
});
