// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: CK5Roq2dBGcRPqc72xPE7
// Component: -6FXQIV15U
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_cfund_landing_page.module.css"; // plasmic-import: CK5Roq2dBGcRPqc72xPE7/projectcss
import sty from "./PlasmicNewsCard.module.css"; // plasmic-import: -6FXQIV15U/css

export type PlasmicNewsCard__VariantMembers = {};

export type PlasmicNewsCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewsCard__VariantsArgs;
export const PlasmicNewsCard__VariantProps = new Array<VariantPropType>();

export type PlasmicNewsCard__ArgsType = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  newsImage?: React.ReactNode;
  date?: React.ReactNode;
};

type ArgPropType = keyof PlasmicNewsCard__ArgsType;
export const PlasmicNewsCard__ArgProps = new Array<ArgPropType>(
  "title",
  "description",
  "newsImage",
  "date"
);

export type PlasmicNewsCard__OverridesType = {
  root?: p.Flex<"div">;
  cardContent?: p.Flex<"div">;
  newsTitle?: p.Flex<"h5">;
  date?: p.Flex<"div">;
  description?: p.Flex<"p">;
};

export interface DefaultNewsCardProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  newsImage?: React.ReactNode;
  date?: React.ReactNode;
  className?: string;
}

function PlasmicNewsCard__RenderFunc(props: {
  variants: PlasmicNewsCard__VariantsArgs;
  args: PlasmicNewsCard__ArgsType;
  overrides: PlasmicNewsCard__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__axUk3)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/cfund_landing_page/images/image20.png",
              fullWidth: 1300,
              fullHeight: 731,
              aspectRatio: undefined
            }}
          />
        ),

        value: args.newsImage
      })}

      <p.Stack
        as={"div"}
        data-plasmic-name={"cardContent"}
        data-plasmic-override={overrides.cardContent}
        hasGap={true}
        className={classNames(projectcss.all, sty.cardContent)}
      >
        <h5
          data-plasmic-name={"newsTitle"}
          data-plasmic-override={overrides.newsTitle}
          className={classNames(projectcss.all, projectcss.h5, sty.newsTitle)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "This is News Title",
            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}
        </h5>

        <div
          data-plasmic-name={"date"}
          data-plasmic-override={overrides.date}
          className={classNames(projectcss.all, sty.date)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "13 February 2022",
            value: args.date,
            className: classNames(sty.slotTargetDate)
          })}
        </div>

        <p
          data-plasmic-name={"description"}
          data-plasmic-override={overrides.description}
          className={classNames(projectcss.all, projectcss.p, sty.description)}
        >
          {p.renderPlasmicSlot({
            defaultContents:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            value: args.description
          })}
        </p>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "cardContent", "newsTitle", "date", "description"],
  cardContent: ["cardContent", "newsTitle", "date", "description"],
  newsTitle: ["newsTitle"],
  date: ["date"],
  description: ["description"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  cardContent: "div";
  newsTitle: "h5";
  date: "div";
  description: "p";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewsCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewsCard__VariantsArgs;
    args?: PlasmicNewsCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewsCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNewsCard__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNewsCard__ArgProps,
          internalVariantPropNames: PlasmicNewsCard__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNewsCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewsCard";
  } else {
    func.displayName = `PlasmicNewsCard.${nodeName}`;
  }
  return func;
}

export const PlasmicNewsCard = Object.assign(
  // Top-level PlasmicNewsCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cardContent: makeNodeComponent("cardContent"),
    newsTitle: makeNodeComponent("newsTitle"),
    date: makeNodeComponent("date"),
    description: makeNodeComponent("description"),

    // Metadata about props expected for PlasmicNewsCard
    internalVariantProps: PlasmicNewsCard__VariantProps,
    internalArgProps: PlasmicNewsCard__ArgProps
  }
);

export default PlasmicNewsCard;
/* prettier-ignore-end */
