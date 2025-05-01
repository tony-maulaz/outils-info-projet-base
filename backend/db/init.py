import asyncio
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload
from sqlalchemy.ext.asyncio import AsyncSession
from db.db import engine
from models.base import Base
from models.person import Person

async def init_db():
    async with engine.begin() as conn:
        print("Suppression et recréation des tables...")
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)

    async with AsyncSession(engine) as session:
        print("Insertion des données...")

        # --- Insérer des personnes ---
        people = [
            Person(name="Alice", age=30),
            Person(name="Bob", age=25),
            Person(name="Charlie", age=35),
            Person(name="David", age=40),
            Person(name="Emma", age=28),
            Person(name="Frank", age=22),
            Person(name="Grace", age=33),
            Person(name="Hannah", age=29),
            Person(name="Isaac", age=31),
            Person(name="Julia", age=27)
        ]
        session.add_all(people)
        await session.flush()
        await session.commit()

        print("Base de données peuplée avec succès !")
