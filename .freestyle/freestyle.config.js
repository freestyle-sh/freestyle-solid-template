// freestyle.config.ts
import { defineConfig } from "freestyle-sh";
var freestyle_config_default = defineConfig({
  dev: {
    proxy: "http://localhost:3000"
  },
  deploy: {
    web: {
      entryPoint: ".output/server/index.ts"
    }
  }
});
export {
  freestyle_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZnJlZXN0eWxlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnfSBmcm9tICdmcmVlc3R5bGUtc2gnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgZGV2OiB7XG4gICAgICAgIHByb3h5OiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXG4gICAgfSxcbiAgICBkZXBsb3k6IHtcbiAgICAgICAgd2ViOiB7XG4gICAgICAgICAgICBlbnRyeVBvaW50OiBcIi5vdXRwdXQvc2VydmVyL2luZGV4LnRzXCJcbiAgICAgICAgfVxuICAgIH1cbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUFtQjtBQUU1QixJQUFPLDJCQUFRLGFBQWE7QUFBQSxFQUN4QixLQUFLO0FBQUEsSUFDRCxPQUFPO0FBQUEsRUFDWDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0osS0FBSztBQUFBLE1BQ0QsWUFBWTtBQUFBLElBQ2hCO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
