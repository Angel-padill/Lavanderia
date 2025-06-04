from app.database.db import db

class Log(db.Model):
    _tablename_ ="log"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users_id"))
    action = db.Column(db.String(50))
    date = db.Column(db.DateTime)

    def to_dict():
        log = {
            "id":self.id,
            "user_id":self.user_id,
            "action":self.action,
            "date":self.date.isoformat()
        }
        return log