import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("thing", function(table) {
		table.specificType(
			"id",
			"integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY"
		);
    })
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable("thing");
}

