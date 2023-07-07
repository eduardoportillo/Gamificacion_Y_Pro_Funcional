import Controllers.userController;
import Servisofts.Servisofts;
import Servisofts.http.Rest;

public class App {
    public static void main(String[] args) throws Exception {
        Servisofts.DEBUG = true;
        Rest.addController(userController.class);
        Rest.start(8080);
    }
}
