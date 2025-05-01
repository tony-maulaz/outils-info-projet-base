
from fastapi import Depends, APIRouter
from sqlalchemy.ext.asyncio import AsyncSession

from db.db import get_db

from crud.person import get_persons

router = APIRouter()

@router.get("/")
async def list_persons(db: AsyncSession = Depends(get_db)):
    print("Fetching persons from the database...")
    return await get_persons(db)
