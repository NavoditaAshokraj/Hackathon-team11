class User:
    def __init__(self, username, email, password):
        self.__username = username
        self.__email = email
        self.__password = password

        self.__level1Status = False
        self.__level2Status = False

    def get_username(self):
        return self.__username

    def get_email(self):
        return self.__email

    def get_password(self):
        return self.__password

    def mark_level1_complete(self):
        self.__level1Status = True

    def mark_level2_complete(self):
        self.__level2Status = True

    def is_level1_complete(self):
        return self.__level1Status

    def is_level2_complete(self):
        return self.__level2Status


