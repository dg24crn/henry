import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Credentials from "./Credentials";
import Appointments from "./Appointments";

@Entity({ name: "Users" })
class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  birthdate: string;

  @Column()
  nDni: string;

  @OneToOne(() => Credentials)
  @JoinColumn()
  credential: Credentials;

  @OneToMany(() => Appointments, appointment => appointment.user)
  appointments: Appointments[];
}

export default Users;
