import java.util.Arrays;
import java.util.ArrayList;

public class Portfolio{
    // ATTRIBUTES & MEMBER VARIABLES
    private ArrayList<Project> projects;
    
    // CONSTRUCTOR
    public Portfolio(){
        this.projects = new ArrayList<Project>();
    }

    public ArrayList<Project> getProjects(){
        return this.projects;
    }

    public void setProjects(ArrayList<Project> projects){
        this.projects = projects;
    }

    public void addProject(Project project){
        this.projects.add(project);
    }

    public double getPortfolioCost(){
        double sum = 0;
        for(Project project : projects){
            sum += project.getInitialCost();
        }
        return sum;
    }

    public void showPortfolio(){
        double sum = 0;
        for(Project project : projects){
            System.out.println(project.elevatorPitch());
        }
        System.out.println(this.getPortfolioCost());
    }
}