import { z } from 'zod';

export const VehicleZodSchema = z.object({
  model: z.string().min(3),
  year: z.number().int().positive().gte(1900)
    .lte(2022),
  color: z.string().min(3),
  status: z.optional(z.boolean()),
  buyValue: z.number().int(),
});

export type IVehicle = z.infer<typeof VehicleZodSchema>;
