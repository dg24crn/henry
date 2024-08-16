import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Users from "./Users";

@Entity({ name: "Appointments" })
class Appointments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  userId: number;

  @Column({ default: true })
  status: boolean;

  @ManyToOne(() => Users, (user) => user.appointments)
  user: Users;
}

export default Appointments;
