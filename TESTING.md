(Format ist inspiriert von David)
# **Testing**

1. **Test-case**: /tasks sind nicht erreichbar ohne Anmeldung
    **Anfrage**: GET /tasks || POST /tasks GET /tasks/:id || PUT /tasks/:id || DELETE /tasks/:id
    **Erwartetes Resultat**: Man sollte keinen Zugriff haben und nicht auf /tasks zugreifen können.
    **Status**: Erfolgreich
---
2. **Test-case**: Man kann sich mit dem Passwort "m295" und einer beliebigen E-Mail Adresse erfolgreich anmelden
    **Anfrage**: POST /login
    **Erwartetes Resultat**: Man bekommt eine Session und kann auf /tasks zugreifen.
    **Status**: Erfolgreich

---
3. **Test-case**: Man kann sich verifizieren wenn man sich angemeldet hat
    **Anfrage**: GET /verify
    **Erwartetes Resultat**: Man bekommt einen erfolgreichen Status zurück wenn man sich davor angemeldet hat
    **Status**: Erfolgreich

---
4. **Test-case**: Man kann sich ohne Probleme abmelden
    **Anfrage**: DELETE /logout
    **Erwartetes Resultat**: Man hat keinen Zugriff mehr auf /tasks
    **Status**: Erfolgreich
---
5. **Test-case**: Man bekommt alle Tasks zurück
    **Anfrage**: GET /tasks
    **Erwartetes Resultat**: Man bekommt eine JSON mit allen Tasks
    **Status**: Erfolgreich
---
6. **Test-case**: Man kann eine neue Task hinzufügen
    **Anfrage**: POST /tasks
    **Erwartetes Resultat**: Man bekommt die neue Task zurück und sie wird der Liste hinzugefügt
    **Status**: Erfolgreich
---
7. **Test-case**: Man kann eine einzelne Task abfragen
    **Anfrage**: GET /tasks/:id
    **Erwartetes Resultat**: Man bekommt ein Objekt der gefragten Task zurück
    **Status**: Erfolgreich
---
8. **Test-case**: Man kann eine bestehende Task bearbeiten
    **Anfrage**: PUT /tasks/:id
    **Erwartetes Resultat**: Man bekommt die geänderte Task zurück und sie wird in der Liste geändert.
    **Status**: Erfolgreich
---
9. **Test-case**: Man kann eine bestehende Task löschen
    **Anfrage**: DELETE /tasks/:id
    **Erwartetes Resultat**: Man bekommt den Status Code 200 zurück und die Task ist nicht mehr in der Liste
    **Status**: Erfolgreich