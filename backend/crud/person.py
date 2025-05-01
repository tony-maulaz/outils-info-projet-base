from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from pydantic import BaseModel
from sqlalchemy.orm import joinedload
from typing import List, Optional
from sqlalchemy.exc import IntegrityError

from models.person import Person

async def get_persons(db: AsyncSession):
    result = await db.execute(select(Person).order_by(Person.id))
    persons = result.scalars().all()
    return persons
