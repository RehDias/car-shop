import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const CarZodSchema = z.object({
  doorsQty: z.number().int().positive().gte(2)
    .lte(4),
  seatsQty: z.number().int().positive().gte(2)
    .lte(7),
});

export const Car = VehicleZodSchema.merge(CarZodSchema);
export type ICar = z.infer<typeof Car>;
