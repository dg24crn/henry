import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "Credentials"})
class Credentials {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string
}

export default Credentials