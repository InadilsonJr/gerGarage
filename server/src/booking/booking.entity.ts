import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
// creating the columns on the table
@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  serviceType: string;

  @Column({length: 200} )
  vehicle_type: string;

  @Column({length: 200} )
  license: string;

  @Column({length: 255 })
  enginee_type: string;

  //in the case of booking we can have many bookings for one user
  @ManyToOne(() => User, user => user.booking)
  user: User

  @Column({length: 255 })
  date: string;

  @Column({length: 255 })
  time: string;

  @Column({length: 255 })
  status: string;

  @Column({length: 255 })
  cost: string;

  @Column({length: 255 })
  addCost: string;

  @Column({length: 255 })
  mechanic: string;

}