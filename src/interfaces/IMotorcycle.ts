import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const values = ['Street', 'Custom', 'Trail'] as const;

const MotorZodSchema = z.object({
  category: z.enum(values),
  engineCapacity: z.number().int().positive().lte(2500),
});

export const Motor = VehicleZodSchema.merge(MotorZodSchema);
export type IMotorcycle = z.infer<typeof Motor>;
