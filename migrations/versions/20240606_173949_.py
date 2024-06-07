"""empty message

Revision ID: 4b6951abfee0
Revises: bafb0ca71ece
Create Date: 2024-06-06 17:39:49.030106

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4b6951abfee0'
down_revision = 'bafb0ca71ece'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('product_images', schema=None) as batch_op:
        batch_op.alter_column('main_image',
               existing_type=sa.BOOLEAN(),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('product_images', schema=None) as batch_op:
        batch_op.alter_column('main_image',
               existing_type=sa.BOOLEAN(),
               nullable=False)

    # ### end Alembic commands ###
