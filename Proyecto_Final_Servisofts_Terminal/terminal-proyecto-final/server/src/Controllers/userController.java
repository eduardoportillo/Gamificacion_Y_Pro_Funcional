package Controllers;

import org.json.JSONArray;
import org.json.JSONObject;

import Servisofts.SUtil;
import Servisofts.http.*;
import Servisofts.http.Exception.*;
import Servisofts.http.annotation.*;

@RestController
@RequestMapping("/user")
public class userController {
    public static JSONObject DATA = new JSONObject();

    @GetMapping("/")
    public String getAll() {
        return DATA.toString();
    }

    @GetMapping("/by")
    public String by(@RequestParam("key") String key) throws HttpException {
        if (!DATA.has(key))
            throw new HttpException(404, "No encontrado");
        return DATA.getJSONObject(key).toString();
    }

    @PostMapping("/create")
    public String create(@RequestBody String request) throws HttpException {
        JSONObject obj = new JSONObject(request);
        if (!obj.has("key")) {
            obj.put("key", SUtil.uuid());
        }
        if (!obj.has("nombre") || obj.isNull("nombre"))
            throw new HttpException(400, "[ nombre ] is required");
        DATA.put(obj.getString("key"), obj);
        return obj.toString();
    }

    @PutMapping("/")
    public String edit(@RequestParam("key") String key, @RequestBody String request) throws HttpException {
        JSONObject obj = new JSONObject(request);
        if (!DATA.has(key)) {
            throw new HttpException(404, "No encontrado");
        }
        JSONObject user = DATA.getJSONObject(key);
        obj.keys().forEachRemaining(a -> {
            user.put(a, obj.get(a));
        });
        return user.toString();
    }

    @DeleteMapping("/")
    public String delete(@RequestParam("key") String key) throws HttpException {
        if (!DATA.has(key)) {
            throw new HttpException(404, "No encontrado");
        }
        DATA.remove(key);
        return "exito";
    }
}
