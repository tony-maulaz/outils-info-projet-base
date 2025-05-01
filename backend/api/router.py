from fastapi import APIRouter
from api import person

router = APIRouter()

router.include_router(person.router, prefix="/persons", tags=["Persons"])
